package main

import (
	"context"
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	pb "github.com/l3mncakes/swarm-interactive/pkg/protobuf/swarm_interactive/test/v1"
	servers "github.com/l3mncakes/swarm-interactive/pkg/servers"
	"google.golang.org/grpc"
	"log"
	"net"
	"net/http"
	"os"
)

type server struct {
	pb.UnimplementedTestServiceServer
}

func (s *server) Greet(ctx context.Context, in *pb.TestRequest) (*pb.TestResponse, error) {
	log.Printf("Request for Test.Greet")

	db, err := sql.Open("mysql", "user:password@tcp(swarm-interactive-db:3306)/db")
	if err != nil {
		log.Fatalf("Failed to open mysql: %v", err)
	}
	defer db.Close()

	if err = db.Ping(); err != nil {
		log.Fatalf("Failed to ping db: %v", err)
	}

	return &pb.TestResponse{
		Greeting: "Hello, " + in.Name,
	}, nil
}

type EnvVars struct {
	GRPC_PORT string
	HTTP_PORT string
	APP_NAME  string
	SERVE_ON  string
}

func GetEnvVars() (*EnvVars, error) {
	env := &EnvVars{}

	if env.GRPC_PORT = os.Getenv("GRPC_PORT"); env.GRPC_PORT == "" {
		return nil, fmt.Errorf("GRPC_PORT not defined")
	}

	if env.HTTP_PORT = os.Getenv("HTTP_PORT"); env.HTTP_PORT == "" {
		return nil, fmt.Errorf("HTTP_PORT not defined")
	}

	if env.APP_NAME = os.Getenv("APP_NAME"); env.APP_NAME == "" {
		return nil, fmt.Errorf("APP_NAME not defined")
	}

	if env.SERVE_ON = os.Getenv("SERVE_ON"); env.SERVE_ON == "" {
		return nil, fmt.Errorf("SERVE_ON not defined")
	}

	return env, nil
}

func main() {
	env, err := GetEnvVars()

	if err != nil {
		log.Fatalf("Failed to get Env vars: %v", err)
	}

	log.Printf("Starting %s", env.APP_NAME)

	grpcServer := grpc.NewServer()
	pb.RegisterTestServiceServer(grpcServer, &servers.TestServiceServer{})

	if env.SERVE_ON == "grpc" {
		lis, err := net.Listen("tcp", fmt.Sprintf(":%s", env.GRPC_PORT))

		if err != nil {
			log.Fatalf("Failed to listen: %v", err)
		}

		log.Println("Starting grpc server...")

		grpcServer.Serve(lis)
	} else {
		wrappedGrpc := grpcweb.WrapServer(grpcServer)

		handler := func(resp http.ResponseWriter, req *http.Request) {
			resp.Header().Set("Access-Control-Allow-Origin", "*")
			resp.Header().Set("Access-Control-Allow-Headers", "*")
			wrappedGrpc.ServeHTTP(resp, req)
		}

		httpServer := http.Server{
			Addr:    fmt.Sprintf(":%s", env.HTTP_PORT),
			Handler: http.HandlerFunc(handler),
		}

		log.Println("Starting http server...")

		if err := httpServer.ListenAndServe(); err != nil {
			log.Fatalf("Failed starting http server: %v", err)
		}
	}
}

package servers

import (
	"context"
	"fmt"
	pb "github.com/l3mncakes/swarm-interactive/pkg/protobuf/swarm_interactive/test/v1"
	"log"
)

type TestServiceServer struct {
	pb.UnimplementedTestServiceServer
}

func (s *TestServiceServer) Greet(ctx context.Context, in *pb.TestRequest) (*pb.TestResponse, error) {
	log.Printf("Request for Test.Greet")

	return &pb.TestResponse{
		Greeting: fmt.Sprintf("Hello, %s", in.Name),
	}, nil
}

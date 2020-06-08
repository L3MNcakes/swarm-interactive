import { Component } from '@angular/core';

import { TestServiceClient } from '@protobuf/swarm_interactive/test/v1/test_grpc_web_pb';
import { TestRequest } from '@protobuf/swarm_interactive/test/v1/test_pb';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'swarm-interactive-ui';
    a;
    b;
    count = [];

    constructor() {
        const client = new TestServiceClient( 'http://localhost:8002' );
        const req = new TestRequest();

        for (let i = 0; i < 100; i++)  {
            this.count.push('');
        }

        req.setName('You spin me right round, baby, right round. ;)');

        client.greet(req, null, (a, b) => {
            this.a = a;
            this.b = b.toObject();
        })
    }
}

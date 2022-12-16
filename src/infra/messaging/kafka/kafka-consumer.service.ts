import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices'


@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy{
    constructor () {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['causal-egret-8519-us1-kafka.upstash.io:9092'],
                sasl: {
                  mechanism: 'scram-sha-256',
                  username: 'Y2F1c2FsLWVncmV0LTg1MTkk1zjSnoHVOcyicZKU5cKWuMFFpq1SgLCcm8w6sYY',
                  password: 'B_XQqerP4ZG0-Qj5hmqwvV5-yZdRlkHsoqYASvGuz9m46yJchrK523Ni7nMGTAsm5GH2PA==',
                },
                ssl: true,
            }
        });
    }

    async onModuleDestroy() {
        await this.close();
      }

}
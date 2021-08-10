import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'memory',
};

export class MainDbDataSource extends juggler.DataSource {
  static dataSourceName = 'main-db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
      dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

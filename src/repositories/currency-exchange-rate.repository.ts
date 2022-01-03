import { DefaultCrudRepository} from '@loopback/repository';
import {juggler} from '@loopback/repository';
// import {MyLocalDbDataSource} from '../../../../apps/first-app/src/datasources';

import {inject} from '@loopback/core';
import { CurrencyExchangeRate, CurrencyExchangeRateRelations } from '../models';

export class CurrencyExchangeRateRepository extends DefaultCrudRepository<
  CurrencyExchangeRate,
  typeof CurrencyExchangeRate.prototype.id,
  CurrencyExchangeRateRelations
> {
  constructor(
    @inject('datasources.MyLocalDb') dataSource: juggler.DataSource,
  ) {
    super(CurrencyExchangeRate, dataSource);
  }
}

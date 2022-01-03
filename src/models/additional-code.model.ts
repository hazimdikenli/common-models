import {Entity, hasMany, model, property} from '@loopback/repository';

@model({name: 'additional_code'})
export class AdditionalCode extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  owner_assigned_id?: string;

  @property({
    type: 'string',
  })
  code?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  formatted_description?: string;

  @property({
    type: 'string',
  })
  datasource_code?: string;

  constructor(data?: Partial<AdditionalCode>) {
    super(data);
  }
}

export interface AdditionalCodeRelations {
  // describe navigational properties here
}

export type AdditionalCodeWithRelations = AdditionalCode &
  AdditionalCodeRelations;

import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CommonEntity1 extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CommonEntity1>) {
    super(data);
  }
}

export interface CommonEntity1Relations {
  // describe navigational properties here
}

export type CommonEntity1WithRelations = CommonEntity1 & CommonEntity1Relations;

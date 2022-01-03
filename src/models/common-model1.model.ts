import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CommonModel1 extends Model {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CommonModel1>) {
    super(data);
  }
}

export interface CommonModel1Relations {
  // describe navigational properties here
}

export type CommonModel1WithRelations = CommonModel1 & CommonModel1Relations;

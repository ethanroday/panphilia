export interface TableStorageValue {
  _: string,
  $?: string
}

export interface TableStorageEntity {
  PartitionKey: TableStorageValue,
  RowKey: TableStorageValue,
  [key: string]: TableStorageValue;
}

export interface DataType {
  id?: number;
  key: string;
  name: string;
  department: string;
  isHead?: boolean;
  remove?: string;
}

export interface ICustomTablePropsCustomTable {
  data: Array<DataType>;
  onDelete: (id: number) => void;
  loading: boolean;
}

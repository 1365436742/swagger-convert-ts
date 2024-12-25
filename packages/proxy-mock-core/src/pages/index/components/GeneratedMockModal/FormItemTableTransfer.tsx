import React from 'react';
import { Table, Tag, Transfer } from 'antd';
import type {
  GetProp,
  TableColumnsType,
  TableProps,
  TransferProps,
} from 'antd';

type TransferItem = GetProp<TransferProps, 'dataSource'>[number];
type TableRowSelection<T extends object> = TableProps<T>['rowSelection'];

interface DataType {
  key: string;
  requestUrl: string;
  methods: string;
}

interface TableTransferProps extends TransferProps<TransferItem> {
  dataSource: DataType[];
  leftColumns: TableColumnsType<DataType>;
  rightColumns: TableColumnsType<DataType>;
}

// Customize Table Transfer
const TableTransfer: React.FC<TableTransferProps> = (props) => {
  const { leftColumns, rightColumns, ...restProps } = props;
  return (
    <Transfer style={{ width: '100%' }} {...restProps}>
      {({
        direction,
        filteredItems,
        onItemSelect,
        onItemSelectAll,
        selectedKeys: listSelectedKeys,
        disabled: listDisabled,
      }) => {
        const columns = direction === 'left' ? leftColumns : rightColumns;
        const rowSelection: TableRowSelection<TransferItem> = {
          getCheckboxProps: () => ({ disabled: listDisabled }),
          onChange(selectedRowKeys) {
            onItemSelectAll(selectedRowKeys, 'replace');
          },
          selectedRowKeys: listSelectedKeys,
        };

        return (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={filteredItems}
            size="small"
            style={{ pointerEvents: listDisabled ? 'none' : undefined }}
            pagination={{
              defaultPageSize: 6,
              pageSizeOptions: [6, 10, 20, 50, 100],
              showSizeChanger: true,
            }}
            onRow={({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) {
                  return;
                }
                onItemSelect(key, !listSelectedKeys.includes(key));
              },
            })}
          />
        );
      }}
    </Transfer>
  );
};

const mockTags = ['GET', 'POST', 'DELETE'];

const mockData = Array.from({ length: 20 }).map<DataType>((_, i) => ({
  key: i.toString(),
  requestUrl: `description of content${i + 1}`,
  methods: mockTags[i % 3],
}));

const columns: TableColumnsType<DataType> = [
  {
    dataIndex: 'requestUrl',
    title: 'requestUrl',
  },
  {
    dataIndex: 'methods',
    title: 'methods',
    render: (tag: string) => <Tag color="processing">{tag.toUpperCase()}</Tag>,
  },
];

const filterOption = (input: string, item: DataType) =>
  item.requestUrl?.includes(input) || item.methods?.includes(input);
interface FormItemTableTransferProps {
  value?: TransferProps['targetKeys'];
  onChange?: TableTransferProps['onChange'];
}

const FormItemTableTransfer: React.FC<FormItemTableTransferProps> = ({
  value,
  onChange,
}) => {
  return (
    <TableTransfer
      dataSource={mockData}
      targetKeys={value}
      showSelectAll
      showSearch
      onChange={onChange}
      filterOption={filterOption}
      leftColumns={columns}
      rightColumns={columns}
    />
  );
};

export default FormItemTableTransfer;

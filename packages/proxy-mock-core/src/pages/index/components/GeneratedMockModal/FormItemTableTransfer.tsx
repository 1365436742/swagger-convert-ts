import React from 'react'
import { Table, Tag, Transfer } from 'antd'
import type { GetProp, TableColumnsType, TableProps, TransferProps } from 'antd'
import { ParseSwaggerByUrlRes } from '../../../../apis/generatedCode'

type TransferItem = GetProp<TransferProps, 'dataSource'>[number]
type TableRowSelection<T extends object> = TableProps<T>['rowSelection']

interface TableTransferProps extends TransferProps<TransferItem> {
  dataSource: ParseSwaggerByUrlRes[]
  leftColumns: TableColumnsType<ParseSwaggerByUrlRes>
  rightColumns: TableColumnsType<ParseSwaggerByUrlRes>
}

// Customize Table Transfer
const TableTransfer: React.FC<TableTransferProps> = props => {
  const { leftColumns, rightColumns, ...restProps } = props
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
        const columns = direction === 'left' ? leftColumns : rightColumns
        const rowSelection: TableRowSelection<TransferItem> = {
          getCheckboxProps: () => ({ disabled: listDisabled }),
          onChange(selectedRowKeys) {
            onItemSelectAll(selectedRowKeys, 'replace')
          },
          selectedRowKeys: listSelectedKeys,
        }

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
                  return
                }
                onItemSelect(key, !listSelectedKeys.includes(key))
              },
            })}
          />
        )
      }}
    </Transfer>
  )
}

const columns: TableColumnsType<ParseSwaggerByUrlRes> = [
  {
    dataIndex: 'requestUrl',
    title: 'requestUrl',
  },
  {
    dataIndex: 'method',
    title: 'method',
    render: (tag: string) => <Tag color="processing">{tag.toUpperCase()}</Tag>,
  },
]

const filterOption = (input: string, item: ParseSwaggerByUrlRes) =>
  item.requestUrl?.includes(input) || item.method?.includes(input)

interface FormItemTableTransferProps {
  dataSource?: ParseSwaggerByUrlRes[]
  value?: TransferProps['targetKeys']
  onChange?: TableTransferProps['onChange']
}

const FormItemTableTransfer: React.FC<FormItemTableTransferProps> = ({
  value,
  dataSource,
  onChange,
}) => {
  return (
    <TableTransfer
      dataSource={dataSource || []}
      targetKeys={value}
      showSelectAll
      showSearch
      onChange={onChange}
      filterOption={filterOption}
      leftColumns={columns}
      rightColumns={columns}
    />
  )
}

export default FormItemTableTransfer

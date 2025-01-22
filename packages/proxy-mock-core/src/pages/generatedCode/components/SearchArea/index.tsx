import { Button, Flex, Input, message } from 'antd'
import './index.less'
import React, { useState } from 'react'
import CreateSpanceModal from '../CreateSpanceModal'
import { generatedCodeCreateSpace } from '../../../../apis/generatedCode'
const { Search } = Input
interface SearchAreaProps {
  searchValue: string
  onSearchChange?: (value: string) => void
  onUpdateList?: () => void
}
const SearchArea: React.FC<SearchAreaProps> = ({
  searchValue,
  onSearchChange,
  onUpdateList,
}) => {
  const [opneCreateSpanceModal, setCreateSpanceModal] = useState(false)
  return (
    <div className="search-area">
      <CreateSpanceModal
        open={opneCreateSpanceModal}
        onChange={setCreateSpanceModal}
        onFinish={values => {
          generatedCodeCreateSpace({
            ...values,
            configJson: {
              filterUrl: ['/**'],
              importStr: "import request from '../index';",
            },
          }).then(res => {
            if (res.data.status === 1) {
              message.success('创建成功')
              onUpdateList?.()
              setCreateSpanceModal(false)
            }
          })
        }}
      ></CreateSpanceModal>
      <Flex gap="small">
        <Search
          value={searchValue}
          placeholder="搜索空间"
          allowClear
          onChange={e => onSearchChange?.(e.target.value)}
        />
        <Button type="primary" onClick={() => setCreateSpanceModal(true)}>
          创建空间
        </Button>
      </Flex>
    </div>
  )
}

export default SearchArea

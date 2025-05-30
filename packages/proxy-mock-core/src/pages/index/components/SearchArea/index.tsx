import {
  Button,
  Checkbox,
  CheckboxChangeEvent,
  Flex,
  Input,
  message,
} from 'antd'
import './index.less'
import UpdataMockModal from '../UpdataMockModal'
import { useState } from 'react'
import GeneratedMockModal from '../GeneratedMockModal'
import { addMock } from '../../../../apis/mock'
const { Search } = Input
interface SearchAreaProps {
  searchValue: string
  mockCheck: boolean
  onSearchChange?: (value: string) => void
  onUpdateList?: () => void
  onChangeCheck?: (e: CheckboxChangeEvent) => void
}
const SearchArea: React.FC<SearchAreaProps> = ({
  searchValue,
  mockCheck,
  onSearchChange,
  onUpdateList,
  onChangeCheck,
}) => {
  const [opneUpdataMockModal, setOpneUpdataMockModal] = useState(false)
  const [opneGeneratedMockModal, setGeneratedMockModal] = useState(false)

  return (
    <div className="search-area">
      <UpdataMockModal
        onFinish={value => {
          addMock(value).then(res => {
            if (res.data.status === 1) {
              message.success(res.data.message)
              onUpdateList?.()
              setOpneUpdataMockModal(false)
            }
          })
        }}
        open={opneUpdataMockModal}
        onChange={setOpneUpdataMockModal}
      ></UpdataMockModal>
      <GeneratedMockModal
        onUpdateList={onUpdateList}
        open={opneGeneratedMockModal}
        onChange={setGeneratedMockModal}
      ></GeneratedMockModal>
      <Flex gap="small">
        <Search
          value={searchValue}
          placeholder="搜索接口名称"
          allowClear
          suffix={
            <Checkbox value={mockCheck} onChange={onChangeCheck}>
              mock
            </Checkbox>
          }
          onChange={e => onSearchChange?.(e.target.value)}
        />
        <Button type="primary" onClick={() => setOpneUpdataMockModal(true)}>
          添加mock数据
        </Button>
        <Button type="primary" onClick={() => setGeneratedMockModal(true)}>
          生成mockjs数据
        </Button>
      </Flex>
    </div>
  )
}

export default SearchArea

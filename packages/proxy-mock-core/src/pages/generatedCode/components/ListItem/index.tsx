import { Button, Flex, message, Popconfirm, Tag } from 'antd'
import './index.less'
import GeneratedCodeModal from '../GeneratedCodeModal'
import { useState } from 'react'
import CreateSpanceModal from '../CreateSpanceModal'
import {
  generatedCodAxiosCode,
  generatedCodeDeleteSpace,
  generatedCodeUpdateSpace,
  SapceItem,
  SpaceConfigJson,
} from '../../../../apis/generatedCode'
interface ListItemProps {
  item: SapceItem
  onUpdateList?: () => void
}
const ListItem: React.FC<ListItemProps> = ({ item, onUpdateList }) => {
  const { spaceName } = item
  const [opneGeneratedCodeModal, setGeneratedCodeModal] = useState(false)
  const [opneCreateSpanceModal, setCreateSpanceModal] = useState(false)
  return (
    <>
      <GeneratedCodeModal
        initialValues={{
          configJson: JSON.stringify(item.configJson, null, 2),
        }}
        open={opneGeneratedCodeModal}
        onChange={setGeneratedCodeModal}
        onFinish={values => {
          try {
            const configJson = JSON.parse(values.configJson) as SpaceConfigJson
            generatedCodAxiosCode({
              swaggerUrl: values.swaggerUrl,
              spaceName,
              configJson: configJson,
            }).then(res => {
              if (res.data.status === 1) {
                onUpdateList?.()
                message.success('生成成功')
                setGeneratedCodeModal(false)
              }
            })
          } catch (error) {
            message.error('指定接口过滤配置，格式错误')
          }
        }}
      ></GeneratedCodeModal>
      <CreateSpanceModal
        title="修改空间名称"
        btnText="修改"
        initialValues={{ spaceName }}
        open={opneCreateSpanceModal}
        onChange={setCreateSpanceModal}
        onFinish={values => {
          if (values.spaceName !== spaceName) {
            generatedCodeUpdateSpace({
              spaceName: values.spaceName,
              oldSpaceName: spaceName,
            }).then(res => {
              if (res.data.status === 1) {
                onUpdateList?.()
                message.success('更改成功')
              }
            })
          }
        }}
      ></CreateSpanceModal>
      <div className="list-item-generated">
        <div className="left">
          <Flex gap="small" className="action">
            <div className="title">{spaceName}</div>
          </Flex>
          <Flex gap="small" className="radion-content" wrap>
            {item.configJson?.filterUrl?.map(item => {
              return (
                <Tag key={item} bordered={false} color="processing">
                  {item}
                </Tag>
              )
            })}
          </Flex>
        </div>
        <div className="btn-action">
          <Flex gap="small">
            <Button type="primary" onClick={() => setGeneratedCodeModal(true)}>
              代码生成
            </Button>
            <Button onClick={() => setCreateSpanceModal(true)}>修改</Button>
            <Popconfirm
              title="确认删除"
              description="将删除该空间，包括下面的所有接口"
              okText="确定"
              cancelText="取消"
              onConfirm={() => {
                generatedCodeDeleteSpace({ spaceName }).then(res => {
                  if (res.data.status === 1) {
                    message.success('删除成功')
                    onUpdateList?.()
                  }
                })
              }}
            >
              <Button danger>删除</Button>
            </Popconfirm>
          </Flex>
        </div>
      </div>
    </>
  )
}

export default ListItem

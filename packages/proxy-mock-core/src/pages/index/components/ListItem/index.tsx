import { Button, Flex, message, Popconfirm, Switch, Tag } from 'antd';
import { EditOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdataMockModal from '../UpdataMockModal';
import React, { useState } from 'react';
import UpdataSceneModal from '../UpdataSceneModal';
import {
  AddMockParams,
  deleteMock,
  MockListRes,
  toggleMock,
  updateMock,
} from '../../../../apis/mock';
import './index.less';
import {
  addSence,
  deleteSence,
  selectSence,
  senceDetail,
  updateSence,
  UpdateSenceParams,
} from '../../../../apis/mockSence';

interface ListItemProps {
  item: MockListRes;
  onUpdateList?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onUpdateList }) => {
  const { url, method } = item;
  const [opneUpdataMockModal, setOpneUpdataMockModal] = useState(false);
  const [opneUpdataSceneModal, setOpneUpdataSceneModal] = useState(false);

  const [opneEditUpdataSceneModal, setEditOpneUpdataSceneModal] =
    useState(false);
  const [initialValuesMock, setInitialValuesMock] = useState<AddMockParams>();
  const [initialValuesSence, setInitialValuesSence] =
    useState<UpdateSenceParams>();

  const onChangeSence = async (curSence: string) => {
    if (curSence === item.sence) return
    await selectSence({
      url,
      method,
      senceName: curSence,
    }).then((res) => {
      if (res.data.status === 1) {
        onUpdateList?.();
      }
    });
  };

  const onChangeSenceContent = (curSence: string) => {
    senceDetail({ url, method, senceName: curSence }).then((res) => {
      if (res.data.status === 1) {
        setInitialValuesSence({
          url,
          method,
          senceName: curSence,
          senceContent: res.data.data.senceContent,
          oldSenceName: curSence,
        });
        setTimeout(() => {
          setEditOpneUpdataSceneModal(true);
        }, 0)
      }
    });
  };

  return (
    <div className="list-item">
      <UpdataMockModal
        initialValues={initialValuesMock}
        title="修改mock数据配置"
        btnText="修改"
        open={opneUpdataMockModal}
        onChange={setOpneUpdataMockModal}
        onFinish={(values) => {
          updateMock({
            ...values,
            sourceFileInfo: {
              url,
              method,
            },
          })
            .then((res) => {
              if (res.data.status === 1) {
                message.success(res.data.message);
                onUpdateList?.();
              }
            })
            .finally(() => {
              setOpneUpdataMockModal(false);
            });
        }}
      ></UpdataMockModal>
      <UpdataSceneModal
        initialValues={{
          senceContent: window.globalData?.senceCodeTemplate
        }}
        onFinish={(values) => {
          const { senceName, senceContent } = values;
          addSence({ url, method, senceName, senceContent })
            .then((res) => {
              if (res.data.status === 1) {
                message.success(res.data.message);
                onUpdateList?.();
                setOpneUpdataSceneModal(false);
              }
            })
        }}
        open={opneUpdataSceneModal}
        onChange={setOpneUpdataSceneModal}
      ></UpdataSceneModal>
      <UpdataSceneModal
        initialValues={initialValuesSence}
        title="修改场景数据"
        btnText="修改"
        open={opneEditUpdataSceneModal}
        onChange={setEditOpneUpdataSceneModal}
        onFinish={async (values) => {
          try {
            const res = await updateSence({
              url,
              method,
              senceContent: values.senceContent,
              senceName: values.senceName,
              oldSenceName: initialValuesSence?.oldSenceName,
            })
            if (res.data.status === 1) {
              message.success(res.data.message);
              if (initialValuesSence?.oldSenceName !== values.senceName) {
                await selectSence({ url, method, senceName: values.senceName })
              }
              onUpdateList?.();
              setEditOpneUpdataSceneModal(false);
            }
          } catch (error) {

          }

        }}
      ></UpdataSceneModal>
      <div className="left">
        <Flex gap="small" className="action">
          <Switch
            value={item.mock}
            checkedChildren="开启"
            unCheckedChildren="关闭"
            onChange={() => toggleMock({ url, method }).then(res => {
              if (res.data.status === 1) {
                onUpdateList?.()
              }
            })}
          />
          {item.sence ? <Tag color="green">{item.sence}</Tag> : ''}
          {item.delay ? <Tag color="red">延时：{item.delay}ms</Tag> : ''}
          <Tag bordered={false} color="processing">
            {method}
          </Tag>
          <div className="title">{url}</div>
        </Flex>
        <Flex gap="small" className="radion-content" wrap>
          {item.senceList.map((sence) => {
            let selectProps = {};
            if (sence === item.sence) {
              selectProps = {
                color: 'primary',
                variant: 'outlined',
              };
            }
            return (
              <Button
                {...selectProps}
                key={sence}
                icon={
                  <Flex gap="small">
                    <EditOutlined
                      onClick={(e) => {
                        e.stopPropagation();
                        onChangeSenceContent(sence);
                      }}
                    />
                    <Popconfirm
                      onPopupClick={(e) => {
                        e.stopPropagation();
                      }}
                      title="确认删除"
                      description="将删除该场景数据"
                      okText="确定"
                      cancelText="取消"
                      onConfirm={() => {
                        deleteSence({ url, method, senceName: sence }).then(res => {
                          if (res.data.status === 1) {
                            message.success("删除成功")
                            onUpdateList?.()
                          }
                        })
                      }}
                    >
                      <DeleteOutlined
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        style={{ color: "red" }}
                      />
                    </Popconfirm>

                  </Flex>
                }
                iconPosition="end"
                onClick={() => onChangeSence(sence)}
              >
                {sence}
              </Button>
            );
          })}
          <Button
            type="dashed"
            icon={<PlusOutlined />}
            onClick={() => setOpneUpdataSceneModal(true)}
          >
            添加
          </Button>
        </Flex>
      </div>
      <div className="btnAction">
        <Flex gap="small">
          <Button
            type="primary"
            onClick={() => {
              setInitialValuesMock({
                url,
                method,
                sence: item.sence,
                mock: item.mock,
                delay: item.delay,
              });
              setOpneUpdataMockModal(true);
            }}
          >
            修改配置
          </Button>
          <Popconfirm
            title="确认删除"
            description="将删除该mock数据"
            okText="确定"
            cancelText="取消"
            onConfirm={() => {
              deleteMock({ url, method }).then(res => {
                if (res.data.status === 1) {
                  message.success(res.data.message);
                  onUpdateList?.();
                }
              })
            }}
          >
            <Button danger>删除</Button>
          </Popconfirm>
        </Flex>
      </div>
    </div>
  );
};

export default ListItem;

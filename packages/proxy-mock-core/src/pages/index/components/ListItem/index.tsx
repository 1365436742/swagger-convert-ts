import { Button, Flex, message, Popconfirm, Switch, Tag } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import UpdataMockModal from '../UpdataMockModal';
import React, { useState } from 'react';
import UpdataSceneModal from '../UpdataSceneModal';
import {
  AddMockParams,
  MockListRes,
  toggleMock,
  updateMock,
} from '../../../../apis/mock';
import './index.less';
import {
  addSence,
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
    await selectSence({
      url,
      method,
      senceName: curSence,
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
        setEditOpneUpdataSceneModal(true);
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
        onFinish={(values) => {
          const { senceName, senceContent } = values;
          addSence({ url, method, senceName, senceContent })
            .then((res) => {
              if (res.data.status === 1) {
                message.success(res.data.message);
                onUpdateList?.();
              }
            })
            .finally(() => {
              setOpneUpdataSceneModal(false);
            });
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
        onFinish={(values) => {
          updateSence({
            url,
            method,
            senceContent: values.senceContent,
            senceName: values.senceName,
            oldSenceName: values.oldSenceName,
          });
        }}
      ></UpdataSceneModal>
      <div className="left">
        <Flex gap="small" className="action">
          <Switch
            value={item.mock}
            checkedChildren="开启"
            unCheckedChildren="关闭"
            onChange={() => toggleMock({ url, method })}
          />
          {item.sence && <Tag color="green">{item.sence}</Tag>}
          {item.delay && <Tag color="red">延时：{item.delay}ms</Tag>}
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
                icon={
                  <EditOutlined
                    onClick={(e) => {
                      e.stopPropagation();
                      onChangeSenceContent(sence);
                    }}
                  />
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
          >
            <Button danger>删除</Button>
          </Popconfirm>
        </Flex>
      </div>
    </div>
  );
};

export default ListItem;

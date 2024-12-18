import { Button, Flex, Popconfirm, Switch, Tag } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import UpdataMockModal from '../UpdataMockModal';
import { useState } from 'react';
import UpdataSceneModal from '../UpdataSceneModal';
import './index.less';

const ListItem = () => {
  const [opneUpdataMockModal, setOpneUpdataMockModal] = useState(false);
  const [opneUpdataSceneModal, setOpneUpdataSceneModal] = useState(false);
  const [opneEditUpdataSceneModal, setEditOpneUpdataSceneModal] =
    useState(false);

  return (
    <div className="list-item">
      <UpdataMockModal
        title="修改mock数据配置"
        btnText="修改"
        open={opneUpdataMockModal}
        onChange={setOpneUpdataMockModal}
      ></UpdataMockModal>
      <UpdataSceneModal
        open={opneUpdataSceneModal}
        onChange={setOpneUpdataSceneModal}
      ></UpdataSceneModal>
      <UpdataSceneModal
        title="修改场景数据"
        btnText="修改"
        open={opneEditUpdataSceneModal}
        onChange={setEditOpneUpdataSceneModal}
      ></UpdataSceneModal>
      <div className="left">
        <Flex gap="small" className="action">
          <Switch checkedChildren="开启" unCheckedChildren="关闭" />
          <Tag color="green">default</Tag>
          <Tag color="red">延时：0s</Tag>
          <Tag bordered={false} color="processing">
            GET
          </Tag>
          <div className="title">/api/apiUrl</div>
        </Flex>
        <Flex gap="small" className="radion-content" wrap>
          <Button
            icon={
              <EditOutlined
                onClick={(e) => {
                  e.stopPropagation();
                  setEditOpneUpdataSceneModal(true);
                }}
              />
            }
            iconPosition="end"
          >
            场景1
          </Button>
          <Button
            color="primary"
            variant="outlined"
            icon={
              <EditOutlined
                onClick={(e) => {
                  e.stopPropagation();
                  setEditOpneUpdataSceneModal(true);
                }}
              />
            }
            iconPosition="end"
          >
            场景1
          </Button>
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
          <Button type="primary" onClick={() => setOpneUpdataMockModal(true)}>
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

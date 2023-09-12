import React, { useContext } from "react";
import { Drawer, List, Button, Row, Col, Image, message, Tooltip } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { CartContext } from "@/context/cart";
import { Link } from "react-router-dom";

const CartSidebar = ({ visible, onClose }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <Drawer
      title="Shopping Cart"
      placement="right"
      width={350}
      visible={visible}
      onClose={onClose}
    >
      <List
        dataSource={cartItems}
        renderItem={(item, index) => (
          <List.Item>
            <Row gutter={16}>
              <Col style={{ marginRight: 40 }} span={6}>
                <Image
                  src={item.image_url}
                  width={100}
                  height={80}
                  responsive
                  alt="image"
                />
              </Col>
              <Col span={12}>
                <h4>{item.title}</h4>
                <h5>Price: {item.price}</h5>
              </Col>
            </Row>
          </List.Item>
        )}
      />
      {cartItems.length > 4 ? (
        <Button
          onClick={() => {
            if (cartItems.length > 4) {
              message.success("Builder completed successfully!");
            } else {
              message.warning(
                "Please add more items to the cart to complete the builder."
              );
            }
          }}
        >
          Complete builder
        </Button>
      ) : (
        <Tooltip title="Add more items to the cart to enable completion">
          <Button disabled>Complete builder</Button>
        </Tooltip>
      )}
    </Drawer>
  );
};

export default CartSidebar;

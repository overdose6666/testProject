//商品详情界面
import React, { Component } from "react";
import "antd-mobile/dist/antd-mobile.css";
import "../../styles/fooddetail.scss";
import TopBar from "../../common/TopBar";
import { Carousel, Picker, List, Tabs, Card, WhiteSpace } from "antd-mobile";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class FoodDetail extends Component {
  constructor(props) {
    super(props);
    this.tabs = [{ title: "图文详情" }, { title: "评论区" }];
    this.subTabs = [{ title: "全部" }, { title: "好评" }, { title: "差评" }];
  }

  // TODO: 加入id
  componentDidMount = () => {
    this.props.initDetailData();
  };

  convertTimeStamp = (time) => {
    let unixTimestamp = new Date(time * 1000);
    return unixTimestamp.toLocaleString();
  };

  render() {
    const detailData = this.props.detailData.toJS();
    return (
      <>
        <TopBar />
        <Carousel autoplay={true} infinite>
          {detailData.carousel &&
            detailData.carousel.map((src) => {
              return (
                <div className="detail-img" key={src}>
                  <img src={src} alt="" />
                </div>
              );
            })}
        </Carousel>
        <div className="detail-title">
          <span>{detailData.title}</span>
        </div>
        <div className="detail-price">
          <div>
            <i>￥</i>
            <span> </span>
            <span>{detailData.price}</span>
          </div>
          <div className="detail-origin">
            <span>{detailData.originPrice}</span>
          </div>
        </div>
        <div className="detail-info">
          <div>配送费 ￥ {detailData.deliveryPrice}</div>
          <div>已售 {detailData.sold}</div>
          <div>库存 {detailData.stock}</div>
        </div>
        <Picker
          cols={1}
          data={
            detailData.choices &&
            detailData.choices.map((choice) => {
              return { value: choice, label: choice };
            })
          }
          value={
            this.props.norm !== ""
              ? [this.props.norm]
              : detailData.choices && [detailData.choices[0]]
          }
          onChange={(value) => {
            this.props.changeNorm(value);
          }}
        >
          <List.Item arrow="horizontal" extra={""} className="detail-choose">
            <span>规格</span>
          </List.Item>
        </Picker>
        <List>
          <List.Item className="detail-delivery">
            <div className="delivery-box">
              <span className="delivery-title">有货</span>
              <span className="forecast">预计 1天后 送达</span>
            </div>
          </List.Item>
        </List>
        <div className="detail-bottom">
          <Tabs
            tabs={this.tabs}
            initialPage={0}
            tabBarUnderlineStyle={{ borderColor: "#32cd32" }}
          >
            <div className="detail-detail">
              <img src={detailData.descImg} alt="" />
            </div>
            <div className="detail-detail">
              <Tabs
                tabs={this.subTabs}
                initialPage={0}
                tabBarBackgroundColor={"#f5f5f9"}
                tabBarActiveTextColor={"#006030"}
                tabBarUnderlineStyle={{ borderColor: "#006030" }}
              >
                <div className="detail-comments">
                  {detailData.comments &&
                    detailData.comments.map((comment) => {
                      return (
                        <>
                          <Card full key={comment.id}>
                            <Card.Header
                              title={comment.author}
                              thumb={
                                <img
                                  className="thumb-img"
                                  src={comment.avatar}
                                  alt=""
                                />
                              }
                              extra={
                                comment.positive ? (
                                  <span className="comment-text positive">
                                    好评
                                  </span>
                                ) : (
                                  <span className="comment-text nagetive">
                                    差评
                                  </span>
                                )
                              }
                            />
                            <Card.Body>
                              <div>{comment.content}</div>
                            </Card.Body>
                            <Card.Footer
                              content={this.convertTimeStamp(comment.timeStamp)}
                            />
                          </Card>
                          <WhiteSpace size="md" />
                        </>
                      );
                    })}
                </div>
                <div className="detail-comments">
                  {detailData.comments &&
                    detailData.comments.map((comment) => {
                      return !comment.positive ? null : (
                        <Card full key={comment.id}>
                          <Card.Header
                            title={comment.author}
                            thumb={
                              <img
                                className="thumb-img"
                                src={comment.avatar}
                                alt=""
                              />
                            }
                            extra={
                              comment.positive ? (
                                <span className="comment-text positive">
                                  好评
                                </span>
                              ) : (
                                <span className="comment-text nagetive">
                                  差评
                                </span>
                              )
                            }
                          />
                          <Card.Body>
                            <div>{comment.content}</div>
                          </Card.Body>
                          <Card.Footer
                            content={this.convertTimeStamp(comment.timeStamp)}
                          />
                        </Card>
                      );
                    })}
                </div>
                <div className="detail-comments">
                  {detailData.comments &&
                    detailData.comments.map((comment) => {
                      return comment.positive ? null : (
                        <Card full key={comment.id}>
                          <Card.Header
                            title={comment.author}
                            thumb={
                              <img
                                className="thumb-img"
                                src={comment.avatar}
                                alt=""
                              />
                            }
                            extra={
                              comment.positive ? (
                                <span className="comment-text positive">
                                  好评
                                </span>
                              ) : (
                                <span className="comment-text nagetive">
                                  差评
                                </span>
                              )
                            }
                          />
                          <Card.Body>
                            <div>{comment.content}</div>
                          </Card.Body>
                          <Card.Footer
                            content={this.convertTimeStamp(comment.timeStamp)}
                          />
                        </Card>
                      );
                    })}
                </div>
              </Tabs>
            </div>
          </Tabs>
        </div>
      </>
    );
  }
}

const mapState = (state) => ({
  detailData: state.getIn(["detail", "detailData"]),
  norm: state.getIn(["detail", "norm"]),
});

const mapProps = (dispatch) => ({
  initDetailData: () => {
    dispatch(actionCreators.initDetailData());
  },
  changeNorm: (norm) => {
    dispatch(actionCreators.changeNorm(norm[0]));
  },
});

export default connect(mapState, mapProps)(FoodDetail);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {axios} from '../setting';
import { Row, Col, Button, Icon, Card, Progress, message } from 'antd';


class MemoryCard extends Component {

  index = 0;

  memorys = 0;

  state = {
    isFront: true,
    card: {
      front: "",
      back: "",
    }
  };

  componentDidMount = () => {
    this.setState({card : this.props.cards[0]});
  };

  isEnd = () => (this.props.cards.length == this.index);

  onChangeBack = () => {
    this.setState({isFront : false});
  };

  onRemember = () => {
    const {card} = this.state;
    axios.put(`/api/cards/${card.id}/memory/remember`)
      .then(response => {
        const {isMemory} = response.data;
        if (!isMemory) {
          this.props.cards.push(card);
        } else {
          this.memorys++;
        }
      });
      this.onChangeBack();
  };

  onForget = () => {
    const {card} = this.state;
    axios.put(`/api/cards/${card.id}/memory/forget`)
      .then(response => {
        this.props.cards.push(card);
      });
    this.onChangeBack();
  };

  onNext = () => {
    this.index = this.index + 1;
    const card = this.props.cards[this.index];
    this.setState({
      card: card,
      isFront:  true
    });
  };

  onComplete = () => {
    this.onNext();
  };

  renderFront = (index) => {
    const {front} = this.state.card;
    return (
      <div>
        <Icon type="tablet" />
        <h2>{front}</h2>
        <Button onClick={this.onRemember}>
          <Icon type="left" />
          记得
          </Button>
        <Button onClick={this.onForget}>
          忘记
          <Icon type="right" />
        </Button>
      </div>
    )
  };

  renderBack = (index) => {
    const {back} = this.state.card;
    return (
      <div>
        <Icon type="tablet" theme="filled" />
        <h2>{back}</h2>
        {this.index == this.props.cards.length - 1 &&
          <Button onClick={this.onComplete}>结束</Button>
        }
        {this.index < this.props.cards.length - 1 &&
          <Button onClick={this.onNext}>下一个</Button>
        }

      </div>
    )
  };

  renderResult = () => {
    return (
      <Link to={`/`}>返回主页</Link>
    )
  };

  render = () => {
    const {isFront, index} = this.state;
    const percent = parseInt(this.index / this.props.cards.length * 100) ;

    var content = null;

    if (this.isEnd()) {
      content = this.renderResult();
    } else {
      if (isFront) {
        content = this.renderFront(index);
      } else {
        content = this.renderBack(index);
      }
    }

    return (
      <div>
        {content}
        <Progress strokeColor={{'0%': '#108ee9','100%': '#87d068',}} percent={percent}/>
      </div>
    )
  }

}

export default MemoryCard

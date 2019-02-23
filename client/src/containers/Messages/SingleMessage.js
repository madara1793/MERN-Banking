import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getMessages } from '../../actions/messagesActions';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';
import { Card, CardBody, CardHeader, CardFooter} from 'reactstrap';

class SingleMessage extends Component {
  componentDidMount() {
        this.props.getMessages();
  }
  render() {
      const { messages } = this.props.message;
    return (
      <div>
           {messages.map(({name, _id, email, select, message}) => (
                <ListGroupItem key={_id}>
                    <Card className="card">
                        <CardHeader>
                            {name}
                        </CardHeader>
                        <CardBody>
                            <ul>
                                <li>{message}</li>
                                <li>{email}</li>
                                <li>{select}</li>
                            </ul>
                        </CardBody>
                        <CardFooter>
                            2019/02/21
                        </CardFooter>
                    </Card>
                </ListGroupItem>
           ))}
      </div>
    )
  }
}

SingleMessage.propTypes = {
    getMessages: PropTypes.func.isRequired,
    transaction: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    message: state.messages
})

export default connect(mapStateToProps, {getMessages})(SingleMessage);
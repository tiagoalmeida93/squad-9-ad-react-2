import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loadDataRequest } from '../actions';
import { connect } from 'react-redux';
import {
  CardPrincipal,
  CardUserInfo,
  UserAvatar,
  StatusMessage,
  CardUserInfoHeader,
  CardUserInfoContent
} from './styles';

class User extends Component {
  componentDidMount() {
    const user = this.props.match.params.nameUser;
    this.props.loadDataRequest(user);
  }

  render() {
    const { user, error, isFetching } = this.props;

    if (isFetching) return <StatusMessage>Loading data...</StatusMessage>;
    if (error) return <StatusMessage>Usuário não encontrado</StatusMessage>;

    return (
      <CardPrincipal>
        {user.map(user => {
          return (
            <div style={{display: "flex"}}>
              {/*<Logo className="logo" src={logoGithub} alt="Logo" />*/}
              <UserAvatar src={user.avatar_url} />
              <CardUserInfo>
                <CardUserInfoHeader>
                  <h3>
                    <a
                      href={user.html_url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {user.name}
                    </a>
                  </h3>
                  <span style={{fontSize: "0.75em"}}>{user.login}</span>
                </CardUserInfoHeader>
                <CardUserInfoContent>
                  <div>Repositórios públicos: {user.public_repos}</div>
                  <div>Seguidores: {user.followers}</div>
                  <div>Seguindo: {user.following}</div>
                </CardUserInfoContent>
              </CardUserInfo>
            </div>
          );
        })}
      </CardPrincipal>
    );
  }
}

function mapStateToProps(state) {
  const { data, error, isFetching } = state.userSearch;
  return {
    user: data,
    error,
    isFetching
  };
}

export default connect(
  mapStateToProps,
  { loadDataRequest }
)(withRouter(User));

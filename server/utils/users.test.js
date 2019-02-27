const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Anton',
      room: 'NAU'
    }, {
      id: '2',
      name: 'Andrew',
      room: 'ICIT'
    }, {
      id: '3',
      name: 'Phil',
      room: 'NAU'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '111',
      name: 'Elena',
      room: 'Holovach'
    };

    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toMatchObject([user]);
  });

  it('should remove a user', () => {
    var userId = '2';
    var removedUser = users.removeUser(userId);
    expect(users.users).not.toMatchObject(removedUser);
    expect(removedUser.id).toBe(userId);
    expect(users.users).toHaveLength(2);
  });

  it('should not remove user', () => {
    var userId = '228';
    var removedUser = users.removeUser(userId);
    expect(removedUser).toBeFalsy();
    expect(users.users).toHaveLength(3);
  });

  it('should return user by id', () => {
    var userId = '2';
    var returnedUser = users.getUser(userId);
    expect(returnedUser.id).toBe(userId);
  });

  it('should not return user by invalid id', () => {
    var userId = '228'
    var returnedUser = users.getUser(userId);
    expect(returnedUser).toBeFalsy();
  });

  it('should return names for NAU', () => {
    var userList = users.getUserList('NAU');
    expect(userList).toMatchObject(['Anton', 'Phil']);
  });

  it('should return names for ICIT', () => {
    var userList = users.getUserList('ICIT');
    expect(userList).toMatchObject(['Andrew']);
  });

});

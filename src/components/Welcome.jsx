import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Добро пожаловать в наше приложение</h1>
      <p>Это API для управления постами и пользователями</p>
      <div className="features">
        <h2>Возможности:</h2>
        <ul>
          <li>Создание и управление постами</li>
          <li>Управление пользователями</li>
          <li>Просмотр всех постов</li>
        </ul>
      </div>
    </div>
  );
};

export default Welcome; 
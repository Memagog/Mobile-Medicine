import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'testDataBase.db', location: 'default' });

export const connect = () => {
  db.transaction(txn => {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS food (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))',
      [],
      (sqlTXn, res) => {
        console.log('table created successfully');
      },
      error => {
        console.log(error);
      },
    );
  });
};

export const find = () => {};

export const update = () => {};

export const addedInMenu = () => {};

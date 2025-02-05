import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'Todos',
  timestamps: true,
  underscored: true,
})
export class Todo extends Model {
  @Column({
    allowNull: false,
  })
  text: string;

  @Column({
    defaultValue: false,
  })
  isChecked: boolean;
}

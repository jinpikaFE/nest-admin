import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: ['admin', 'blog'] })
  type: 'admin' | 'blog';

  @Column()
  uid: string;

  @Column()
  ip: string;

  @Column()
  startTime: Date;

  @Column()
  durationVisit: number;

  @Column()
  pathname: string;
}

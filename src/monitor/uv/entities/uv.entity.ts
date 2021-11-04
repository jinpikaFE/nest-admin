import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Uv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: ['admin', 'blog'] })
  type: 'admin' | 'blog';

  @Column()
  uid: string;

  @Column()
  ip: string;

  @Column()
  address: string;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  durationVisit: number;
}

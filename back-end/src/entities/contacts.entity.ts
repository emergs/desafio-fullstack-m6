import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { Customer } from "./customer.entity"

@Entity("contacts")

export class Contacts {
  @PrimaryColumn({ nullable: false })
  id: string

  @Column({ type: "varchar", length: 200 })
  name: string

  @Column({ type: "varchar", length: 100 })
  email: string

  @Column({ type: "varchar", length: 15 })
  phone: string

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => Customer, { eager: true })
  customer: Customer
}
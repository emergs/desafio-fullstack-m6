import { Exclude } from "class-transformer"
import { Entity, PrimaryColumn, Column, CreateDateColumn, OneToMany } from "typeorm"
import { Contacts } from "./contacts.entity"

@Entity("customer")

export class Customer {
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

  @Column({ type: "varchar", length: 100 })
  @Exclude()
  password: string

  @Column({ default: true })
  isActive: boolean

  @OneToMany(() => Contacts, contacts => contacts.customer)
  contacts: Contacts[]
}
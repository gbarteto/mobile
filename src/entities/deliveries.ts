import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("deliveries")
export class Delivery {
    @PrimaryColumn()
    readonly id!: string

    @Column()
    sale!: string

    @Column()
    address!: string

    @Column()
    status!: string

    @Column()
    shipping_date!: Date

    @Column()
    delivery_date!: Date

    
    @CreateDateColumn()
    created_at!: Date

    @UpdateDateColumn()
    updated_at!: Date

    constructor(){
        if(!this.id){   
            this.id = uuid();  
        }
    }
}
package com.tinder.dating.data

import lombok.AllArgsConstructor
import lombok.NoArgsConstructor
import java.util.*
import javax.persistence.*

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
class User (

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    val id : UUID,

    @Column(name = "email", unique = true)
    val email : String,

    @Column(name = "password")
    val password : String,

    @ManyToOne
    @JoinColumn(name = "country_id")
    val country : Country,
)
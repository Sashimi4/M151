package com.tinder.dating.sqlData.domain

import lombok.AllArgsConstructor
import lombok.NoArgsConstructor
import java.util.*
import javax.persistence.*

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "role", schema="tinder")
data class Role (

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "role_id")
    val id : UUID,

    @Column(name = "role_name", unique = true, nullable = false)
    val roleName : String,

    @ManyToMany(mappedBy = "roles")
    val users: Set<User>,
)

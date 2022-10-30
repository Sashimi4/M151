package com.tinder.dating.sqlData.domain

import com.tinder.dating.sqlData.domain.Country
import lombok.AllArgsConstructor
import lombok.NoArgsConstructor
import java.util.*
import javax.persistence.*

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users", schema="tinder")
data class User (

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "users_id")
    val id : UUID,

    @Column(name = "email", unique = true, nullable = false)
    val email : String,

    @Column(name = "password", nullable = false)
    val password : String,

    @ManyToMany
    @JoinTable(
        name = "tinder.users_roles",
        joinColumns = [ JoinColumn(name = "users_id") ],
        inverseJoinColumns = [ JoinColumn(name = "role_id") ]
    )
    val roles: Set<Role>,

    @ManyToOne
    @JoinColumn(name = "id_country", nullable = true)
    val country : Country,
) {
    fun addRole(role: Role) {
        this.roles.plusElement(role)
    }
}
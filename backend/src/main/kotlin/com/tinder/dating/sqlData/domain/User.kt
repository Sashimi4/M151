package com.tinder.dating.sqlData.domain

import com.tinder.dating.sqlData.domain.Country
import lombok.AllArgsConstructor
import lombok.Getter
import lombok.NoArgsConstructor
import lombok.Setter
import java.util.*
import javax.persistence.*

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "users")
class User (

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    val id : UUID,

    @Column(name = "email", unique = true, nullable = false)
    val email : String,

    @Column(name = "password", nullable = false)
    val password : String,

    @ManyToMany
    @JoinTable(
        name = "users_roles",
        joinColumns = [ JoinColumn(name = "user_id") ],
        inverseJoinColumns = [ JoinColumn(name = "role_id") ]
    )
    val roles: Set<Role>,

    @ManyToOne
    @JoinColumn(name = "country_id", nullable = true)
    val country : Country,
) {
    fun addRole(role: Role) {
        this.roles.plusElement(role)
    }
}
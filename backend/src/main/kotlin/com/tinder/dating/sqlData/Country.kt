package com.tinder.dating.sqlData

import lombok.NoArgsConstructor
import lombok.AllArgsConstructor
import javax.persistence.*

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "country")
class Country (

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="country_id")
    val countryId : Int,

    @Column(name="country_name", nullable = false, unique = true)
    val countryName : String,

    @OneToMany(mappedBy = "country")
    val users : Set<User>
)
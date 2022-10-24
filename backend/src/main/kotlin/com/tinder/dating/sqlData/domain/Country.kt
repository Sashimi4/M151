package com.tinder.dating.sqlData.domain

import lombok.NoArgsConstructor
import lombok.AllArgsConstructor
import lombok.Getter
import lombok.Setter
import javax.persistence.*

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
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
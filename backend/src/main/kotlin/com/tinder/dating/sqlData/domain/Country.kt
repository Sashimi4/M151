package com.tinder.dating.sqlData.domain

import lombok.NoArgsConstructor
import lombok.AllArgsConstructor
import org.springframework.data.annotation.Transient
import javax.persistence.*

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "country", schema="tinder")
class Country (

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="country_id")
    val countryId : Int,

    @Column(name="country_name", nullable = false, unique = true)
    val countryName : String,

    @Transient
    @OneToMany(mappedBy = "country")
    val users : Set<User>
)
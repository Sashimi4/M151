package com.tinder.dating.sqlData

import com.tinder.dating.nosqlData.Message
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
    @Column(name = "user_id")
    val id : UUID,

    @Column(name = "email", unique = true)
    val email : String,

    @Column(name = "password")
    val password : String,

    @ManyToOne
    @JoinColumn(name = "country_id")
    val country : Country,

    //@DBRef
    //val sentMessages : Set<Message>,

    //@DBRef
    //val receivedMessages : Set<Message>
)
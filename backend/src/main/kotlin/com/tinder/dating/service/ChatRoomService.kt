package com.tinder.dating.service

import com.tinder.dating.nosqlData.domain.ChatRoom
import com.tinder.dating.nosqlData.repo.ChatRoomRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*


@Service
class ChatRoomService {

    @Autowired
    lateinit var chatRoomRepository: ChatRoomRepository
}
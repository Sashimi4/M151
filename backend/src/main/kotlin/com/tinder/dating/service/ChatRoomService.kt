package com.tinder.dating.service

import com.tinder.dating.nosqlData.domain.ChatRoom
import com.tinder.dating.nosqlData.repo.ChatRoomRepository
import com.tinder.dating.nosqlData.repo.MatchRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*


@Service
@Transactional
class ChatRoomService @Autowired constructor(
    private val chatRoomRepository: ChatRoomRepository
){
}
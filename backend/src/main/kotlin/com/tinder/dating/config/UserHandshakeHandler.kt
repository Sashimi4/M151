package com.tinder.dating.config

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.http.server.ServerHttpRequest
import org.springframework.web.socket.WebSocketHandler
import org.springframework.web.socket.server.support.DefaultHandshakeHandler
import java.nio.file.attribute.UserPrincipal
import java.security.Principal
import java.util.UUID

class UserHandshakeHandler: DefaultHandshakeHandler() {
    private val LOG: Logger = LoggerFactory.getLogger(UserHandshakeHandler::class.java)

    override fun determineUser(
        request: ServerHttpRequest,
        wsHandler: WebSocketHandler,
        attributes: MutableMap<String, Any>
    ): Principal {
        val id: String = UUID.randomUUID().toString()
        LOG.info("User with ID $id opened the page")
        return UserPrincipal({ id })
    } //here we want to grab the information of the user. -> we want the mongodb user containing all messages
}
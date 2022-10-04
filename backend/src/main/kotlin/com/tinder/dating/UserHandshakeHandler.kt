package com.tinder.dating

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
    ): Principal? {
        val randomID: String = UUID.randomUUID().toString()
        LOG.info("User with ID $randomID opened the page")
        return UserPrincipal({ randomID })
    }
}
package com.tinder.dating.security

import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator
import org.springframework.security.oauth2.core.OAuth2TokenValidator
import org.springframework.security.oauth2.jwt.*;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
class SecurityConfig: WebSecurityConfigurerAdapter() {

    @Value("\${auth0.audience}")
    private lateinit var audience: String

    @Value("\${spring.security.oauth2.resourceserver.jwt.issuer-uri}")
    private lateinit var issuer: String

    override fun configure(http: HttpSecurity?) {
        http?.authorizeRequests()
            ?.anyRequest()
            ?.authenticated()
            ?.and()
            ?.cors()
            ?.configurationSource(corsConfigurationSource())
            ?.and()
            ?.oauth2ResourceServer()
            ?.jwt()
            ?.decoder(jwtDecoder())
            ?.jwtAuthenticationConverter(jwtAuthenticationConverter())
    }

    fun corsConfigurationSource(): CorsConfigurationSource{
        val configuration: CorsConfiguration = CorsConfiguration()
        configuration.allowedOriginPatterns = listOf(
            HttpMethod.GET.name,
            HttpMethod.PUT.name,
            HttpMethod.POST.name,
            HttpMethod.DELETE.name,
        )

        //Enable all CORS connection
        val source: UrlBasedCorsConfigurationSource = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", configuration.applyPermitDefaultValues())
        return source
    }

    fun jwtDecoder(): JwtDecoder {
        val withAudience: OAuth2TokenValidator<Jwt> = AudienceValidator(audience)
        val withIssuer = JwtValidators.createDefaultWithIssuer(issuer)
        val validator = DelegatingOAuth2TokenValidator(withAudience, withIssuer)

        val jwtDecoder: NimbusJwtDecoder = JwtDecoders.fromOidcIssuerLocation(issuer)
        jwtDecoder.setJwtValidator(validator)
        return jwtDecoder
    }

    fun jwtAuthenticationConverter(): JwtAuthenticationConverter{
        val converter = JwtGrantedAuthoritiesConverter()
        converter.setAuthoritiesClaimName("permissions")
        converter.setAuthorityPrefix("")

        val jwtConverter = JwtAuthenticationConverter()
        jwtConverter.setJwtGrantedAuthoritiesConverter(converter)

        return jwtConverter
    }
}
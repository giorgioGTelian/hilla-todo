package com.example.application.endpoints;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

@Endpoint
@AnonymousAllowed
public class CounterEndpoint {
    /**
     * A method that adds one to the argument.
     */
    public int addOne(int number) {
        return number + 1;
    }
}

package br.com.alisonDenner.application.controller;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import br.com.alisonDenner.application.model.Produto;
import br.com.alisonDenner.application.services.PessoaService;

@Path("pessoa")
@Produces(value = MediaType.APPLICATION_JSON)
public class PessoaController {

	@Inject
	PessoaService service;

	@GET
	public Response get() {
		try {
			return Response.ok(service.loadAll()).build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity(e)
					.build();
		}
	}

	@GET
	@Path("/filter/{name}")
	public Response get(@PathParam("name") String name) {
		try {
			return Response.ok(service.loadLikeBy(name)).build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity(e)
					.build();
		}
	}

	@POST
	public Response insertOrUpdate(Produto category) {
		try {
			service.insertOrUpdate(category);
			return Response.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity(e)
					.build();
		}
	}

	@DELETE
	public Response delete(Produto category) {
		try {
			service.delete(category);
			return Response.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity(e)
					.build();
		}
	}
}

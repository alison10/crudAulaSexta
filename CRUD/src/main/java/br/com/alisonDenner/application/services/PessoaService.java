package br.com.alisonDenner.application.services;

import java.util.List;

import javax.inject.Inject;

import br.com.alisonDenner.application.model.Produto;
import br.com.alisonDenner.application.repository.PessoaRepository;

public class PessoaService {

	@Inject
	PessoaRepository repository;

	public List<Produto> loadAll() {
		return repository.loadAll();
	}

	public List<Produto> loadLikeBy(String name) {
		return repository.loadLikeBy(name);
	}

	public void insertOrUpdate(Produto category) {
		repository.save(category);

	}

	public void delete(Produto category) {
		repository.delete(category);
	}

}

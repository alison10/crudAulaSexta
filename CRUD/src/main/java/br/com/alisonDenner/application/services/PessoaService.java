package br.com.alisonDenner.application.services;

import java.util.List;

import javax.inject.Inject;

import br.com.alisonDenner.application.model.Pessoa;
import br.com.alisonDenner.application.repository.PessoaRepository;

public class PessoaService {

	@Inject
	PessoaRepository repository;

	public List<Pessoa> loadAll() {
		return repository.loadAll();
	}

	public List<Pessoa> loadLikeBy(String name) {
		return repository.loadLikeBy(name);
	}

	public void insertOrUpdate(Pessoa category) {
		repository.save(category);

	}

	public void delete(Pessoa category) {
		repository.delete(category);
	}

}

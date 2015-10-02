package br.com.alisonDenner.application.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import br.com.alisonDenner.application.model.Pessoa;

public class PessoaRepository {

	@PersistenceContext(name = "default")
	private EntityManager manager;

	public List<Pessoa> loadAll() {
		return manager.createQuery("SELECT c FROM Pessoa c").getResultList();
	}

	public List<Pessoa> loadLikeBy(String name) {
		Query query = manager
				.createQuery("SELECT c FROM Pessoa c WHERE LOWER(c.name) LIKE :name");
		query.setParameter("name", "%" + name.toLowerCase() + "%");
		return query.getResultList();
	}

	@Transactional
	public void save(Pessoa pessoa) {
		Object identifier = manager.getEntityManagerFactory()
				.getPersistenceUnitUtil().getIdentifier(pessoa);

		if (identifier == null) {
			manager.persist(pessoa);
		} else {
			manager.merge(pessoa);
		}
	}

	@Transactional
	public void delete(Pessoa pessoa) {
		Object identifier = manager.getEntityManagerFactory()
				.getPersistenceUnitUtil().getIdentifier(pessoa);
		Pessoa entity = manager.find(Pessoa.class, identifier);
		manager.remove(entity);
	}

}

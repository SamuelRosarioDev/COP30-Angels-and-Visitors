import { UsuarioRepository } from "../repositories/usuario.repository";
import type { CreateUsuarioDTO } from "../dtos/usuario.dto";

export const UsuarioService = {
	create: (dto: CreateUsuarioDTO) => UsuarioRepository.create(dto),

	findAll: () => UsuarioRepository.findAll(),

	findById: (id: number) => UsuarioRepository.findById(id),

	update: (id: number, dto: Partial<CreateUsuarioDTO>) => UsuarioRepository.update(id, dto),

	delete: (id: number) => UsuarioRepository.delete(id),
};

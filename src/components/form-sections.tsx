"use client";

import { UseFormReturn } from "react-hook-form";
import { CaseFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormSectionsProps {
  form: UseFormReturn<CaseFormData>;
}

export function EstrategiaSection({ form }: FormSectionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl border-b pb-2">SEÇÃO 4: ESTRATÉGIA APLICADA (O QUE FIZEMOS)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="font-semibold">Pilares da Metodologia CHAVI utilizados: (Marque todos que se aplicam)</p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* C - CAMPANHA */}
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-bold text-lg mb-2">C - CAMPANHA</h3>
            <div className="space-y-2">
              {[
                { value: "pesquisa_mercado", label: "Pesquisa de mercado local" },
                { value: "definicao_publico", label: "Definição de público-alvo específico" },
                { value: "mapa_mental", label: "Mapa mental estratégico" },
                { value: "criativos", label: "Criativos especializados" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={form.watch("estrategia_c")?.includes(option.value) || false}
                    onCheckedChange={(checked) => {
                      const current = form.watch("estrategia_c") || [];
                      if (checked) {
                        form.setValue("estrategia_c", [...current, option.value]);
                      } else {
                        form.setValue("estrategia_c", current.filter(c => c !== option.value));
                      }
                    }}
                  />
                  <Label htmlFor={option.value}>{option.label}</Label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="estrategia_c_outro"
                  checked={form.watch("estrategia_c")?.includes("outro") || false}
                  onCheckedChange={(checked) => {
                    const current = form.watch("estrategia_c") || [];
                    if (checked) {
                      form.setValue("estrategia_c", [...current, "outro"]);
                    } else {
                      form.setValue("estrategia_c", current.filter(c => c !== "outro"));
                    }
                  }}
                />
                <Label htmlFor="estrategia_c_outro">Outro:</Label>
                <Input
                  {...form.register("estrategia_c_outro")}
                  placeholder="Especifique"
                  className="ml-2 flex-1"
                />
              </div>
            </div>
          </div>

          {/* H - HUMANIZAÇÃO */}
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-bold text-lg mb-2">H - HUMANIZAÇÃO</h3>
            <div className="space-y-2">
              {[
                { value: "curadoria_videos", label: "Curadoria de vídeos" },
                { value: "roteiros", label: "Roteiros personalizados" },
                { value: "gravacao_dentistas", label: "Gravação com dentistas" },
                { value: "depoimentos", label: "Depoimentos de pacientes" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={form.watch("estrategia_h")?.includes(option.value) || false}
                    onCheckedChange={(checked) => {
                      const current = form.watch("estrategia_h") || [];
                      if (checked) {
                        form.setValue("estrategia_h", [...current, option.value]);
                      } else {
                        form.setValue("estrategia_h", current.filter(h => h !== option.value));
                      }
                    }}
                  />
                  <Label htmlFor={option.value}>{option.label}</Label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="estrategia_h_outro"
                  checked={form.watch("estrategia_h")?.includes("outro") || false}
                  onCheckedChange={(checked) => {
                    const current = form.watch("estrategia_h") || [];
                    if (checked) {
                      form.setValue("estrategia_h", [...current, "outro"]);
                    } else {
                      form.setValue("estrategia_h", current.filter(h => h !== "outro"));
                    }
                  }}
                />
                <Label htmlFor="estrategia_h_outro">Outro:</Label>
                <Input
                  {...form.register("estrategia_h_outro")}
                  placeholder="Especifique"
                  className="ml-2 flex-1"
                />
              </div>
            </div>
          </div>

          {/* A - ANÚNCIOS PAGOS */}
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-bold text-lg mb-2">A - ANÚNCIOS PAGOS</h3>
            <div className="space-y-2">
              {[
                { value: "meta_ads", label: "Meta Ads (Facebook/Instagram)" },
                { value: "google_ads", label: "Google Ads" },
                { value: "youtube_ads", label: "YouTube Ads" },
                { value: "tiktok_ads", label: "TikTok Ads" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={form.watch("estrategia_a")?.includes(option.value) || false}
                    onCheckedChange={(checked) => {
                      const current = form.watch("estrategia_a") || [];
                      if (checked) {
                        form.setValue("estrategia_a", [...current, option.value]);
                      } else {
                        form.setValue("estrategia_a", current.filter(a => a !== option.value));
                      }
                    }}
                  />
                  <Label htmlFor={option.value}>{option.label}</Label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="estrategia_a_outro"
                  checked={form.watch("estrategia_a")?.includes("outro") || false}
                  onCheckedChange={(checked) => {
                    const current = form.watch("estrategia_a") || [];
                    if (checked) {
                      form.setValue("estrategia_a", [...current, "outro"]);
                    } else {
                      form.setValue("estrategia_a", current.filter(a => a !== "outro"));
                    }
                  }}
                />
                <Label htmlFor="estrategia_a_outro">Outro:</Label>
                <Input
                  {...form.register("estrategia_a_outro")}
                  placeholder="Especifique"
                  className="ml-2 flex-1"
                />
              </div>
            </div>
          </div>

          {/* V - VENDAS E MONITORAMENTO */}
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-bold text-lg mb-2">V - VENDAS E MONITORAMENTO</h3>
            <div className="space-y-2">
              {[
                { value: "funil_comercial", label: "Estruturação do funil comercial" },
                { value: "crm", label: "Integração com CRM (RD Station)" },
                { value: "treinamento_vendas", label: "Treinamento da equipe de vendas" },
                { value: "acompanhamento_semanal", label: "Acompanhamento semanal" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={form.watch("estrategia_v")?.includes(option.value) || false}
                    onCheckedChange={(checked) => {
                      const current = form.watch("estrategia_v") || [];
                      if (checked) {
                        form.setValue("estrategia_v", [...current, option.value]);
                      } else {
                        form.setValue("estrategia_v", current.filter(v => v !== option.value));
                      }
                    }}
                  />
                  <Label htmlFor={option.value}>{option.label}</Label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="estrategia_v_outro"
                  checked={form.watch("estrategia_v")?.includes("outro") || false}
                  onCheckedChange={(checked) => {
                    const current = form.watch("estrategia_v") || [];
                    if (checked) {
                      form.setValue("estrategia_v", [...current, "outro"]);
                    } else {
                      form.setValue("estrategia_v", current.filter(v => v !== "outro"));
                    }
                  }}
                />
                <Label htmlFor="estrategia_v_outro">Outro:</Label>
                <Input
                  {...form.register("estrategia_v_outro")}
                  placeholder="Especifique"
                  className="ml-2 flex-1"
                />
              </div>
            </div>
          </div>

          {/* I - INTELIGÊNCIA DE DADOS */}
          <div className="bg-gray-50 p-4 rounded-md col-span-1 md:col-span-2">
            <h3 className="font-bold text-lg mb-2">I - INTELIGÊNCIA DE DADOS</h3>
            <div className="space-y-2">
              {[
                { value: "bi", label: "BI personalizado" },
                { value: "relatorios_semanais", label: "Relatórios semanais" },
                { value: "otimizacoes_dados", label: "Otimizações baseadas em dados" },
                { value: "analise_metricas", label: "Análise de métricas em tempo real" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={form.watch("estrategia_i")?.includes(option.value) || false}
                    onCheckedChange={(checked) => {
                      const current = form.watch("estrategia_i") || [];
                      if (checked) {
                        form.setValue("estrategia_i", [...current, option.value]);
                      } else {
                        form.setValue("estrategia_i", current.filter(i => i !== option.value));
                      }
                    }}
                  />
                  <Label htmlFor={option.value}>{option.label}</Label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="estrategia_i_outro"
                  checked={form.watch("estrategia_i")?.includes("outro") || false}
                  onCheckedChange={(checked) => {
                    const current = form.watch("estrategia_i") || [];
                    if (checked) {
                      form.setValue("estrategia_i", [...current, "outro"]);
                    } else {
                      form.setValue("estrategia_i", current.filter(i => i !== "outro"));
                    }
                  }}
                />
                <Label htmlFor="estrategia_i_outro">Outro:</Label>
                <Input
                  {...form.register("estrategia_i_outro")}
                  placeholder="Especifique"
                  className="ml-2 flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ResultadosSection({ form }: FormSectionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl border-b pb-2">SEÇÃO 5: TRANSFORMAÇÃO E RESULTADOS (O DEPOIS)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="font-semibold mb-4">Resumo do resultado final:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Label>Investimento Total:</Label>
              <Input
                {...form.register("resumo_investimento")}
                placeholder="R$"
                className="mt-1"
              />
              {form.formState.errors.resumo_investimento && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.resumo_investimento.message}</p>
              )}
            </div>
            <div>
              <Label>Faturamento Total:</Label>
              <Input
                {...form.register("resumo_faturamento")}
                placeholder="R$"
                className="mt-1"
              />
              {form.formState.errors.resumo_faturamento && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.resumo_faturamento.message}</p>
              )}
            </div>
            <div>
              <Label>Lucro Líquido:</Label>
              <Input
                {...form.register("resumo_lucro")}
                placeholder="R$"
                className="mt-1"
              />
              {form.formState.errors.resumo_lucro && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.resumo_lucro.message}</p>
              )}
            </div>
            <div>
              <Label>ROI Médio:</Label>
              <Input
                {...form.register("resumo_roi")}
                placeholder="%"
                className="mt-1"
              />
              {form.formState.errors.resumo_roi && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.resumo_roi.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <p className="font-semibold mb-4">Principais conquistas (evolução):</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Ticket Médio:</Label>
              <div className="flex items-center mt-1">
                De <Input {...form.register("evolucao_tm_de")} placeholder="R$" className="mx-2" /> 
                para <Input {...form.register("evolucao_tm_para")} placeholder="R$" className="ml-2" />
              </div>
            </div>
            <div>
              <Label>Taxa de Comparecimento:</Label>
              <div className="flex items-center mt-1">
                De <Input {...form.register("evolucao_tc_de")} placeholder="%" className="mx-2" /> 
                para <Input {...form.register("evolucao_tc_para")} placeholder="%" className="ml-2" />
              </div>
            </div>
            <div>
              <Label>CPL:</Label>
              <div className="flex items-center mt-1">
                De <Input {...form.register("evolucao_cpl_de")} placeholder="R$" className="mx-2" /> 
                para <Input {...form.register("evolucao_cpl_para")} placeholder="R$" className="ml-2" />
              </div>
            </div>
            <div>
              <Label>Faturamento Mensal:</Label>
              <div className="flex items-center mt-1">
                De <Input {...form.register("evolucao_fat_de")} placeholder="R$" className="mx-2" /> 
                para <Input {...form.register("evolucao_fat_para")} placeholder="R$" className="ml-2" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="resultado_surpreendente">Qual foi o resultado mais surpreendente/inesperado?</Label>
          <Textarea
            id="resultado_surpreendente"
            {...form.register("resultado_surpreendente")}
            className="mt-1"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="marco_importante">O cliente atingiu algum marco importante? (Ex: abriu segunda unidade, contratou mais dentistas, etc.)</Label>
          <Textarea
            id="marco_importante"
            {...form.register("marco_importante")}
            className="mt-1"
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function DepoimentoSection({ form }: FormSectionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl border-b pb-2">SEÇÃO 6: DEPOIMENTO E STORYTELLING</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="depoimento_cliente">O cliente deu algum depoimento ou feedback? (Cole aqui exatamente como ele falou - WhatsApp, e-mail, áudio transcrito)</Label>
          <Textarea
            id="depoimento_cliente"
            {...form.register("depoimento_cliente")}
            className="mt-1"
            rows={4}
          />
        </div>

        <div>
          <Label htmlFor="momento_virada">Houve algum momento de "virada" ou insight importante na jornada?</Label>
          <Textarea
            id="momento_virada"
            {...form.register("momento_virada")}
            className="mt-1"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="medo_cliente">Qual era o maior medo/objeção do cliente no início?</Label>
          <Textarea
            id="medo_cliente"
            {...form.register("medo_cliente")}
            className="mt-1"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="superacao_medo">Como esse medo foi superado?</Label>
          <Textarea
            id="superacao_medo"
            {...form.register("superacao_medo")}
            className="mt-1"
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function ContextoSection({ form }: FormSectionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl border-b pb-2">SEÇÃO 7: CONTEXTO ADICIONAL</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="contexto_mercado">O mercado local tem alguma particularidade? (Ex: muita concorrência, cidade pequena, perfil de público específico)</Label>
          <Textarea
            id="contexto_mercado"
            {...form.register("contexto_mercado")}
            className="mt-1"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="contexto_desafio">Houve algum desafio específico que precisamos superar?</Label>
          <Textarea
            id="contexto_desafio"
            {...form.register("contexto_desafio")}
            className="mt-1"
            rows={3}
          />
        </div>

        <div>
          <Label>Tem alguma foto/print de relatório que podemos usar?</Label>
          <RadioGroup
            value={form.watch("tem_anexo")}
            onValueChange={(value) => form.setValue("tem_anexo", value as any)}
            className="mt-2 space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="tem_anexo_sim" />
              <Label htmlFor="tem_anexo_sim">Sim (anexar)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="tem_anexo_nao" />
              <Label htmlFor="tem_anexo_nao">Não</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label>Esse case pode ser publicado com o nome da clínica?</Label>
          <RadioGroup
            value={form.watch("publicar_nome")}
            onValueChange={(value) => form.setValue("publicar_nome", value as any)}
            className="mt-2 space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="publicar_sim" />
              <Label htmlFor="publicar_sim">Sim, pode identificar</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="publicar_nao" />
              <Label htmlFor="publicar_nao">Não, manter anônimo</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}

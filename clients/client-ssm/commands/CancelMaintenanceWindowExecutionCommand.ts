import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CancelMaintenanceWindowExecutionRequest, CancelMaintenanceWindowExecutionResult } from "../models/models_0";
import {
  deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand,
  serializeAws_json1_1CancelMaintenanceWindowExecutionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CancelMaintenanceWindowExecutionCommandInput = CancelMaintenanceWindowExecutionRequest;
export type CancelMaintenanceWindowExecutionCommandOutput = CancelMaintenanceWindowExecutionResult & __MetadataBearer;

export class CancelMaintenanceWindowExecutionCommand extends $Command<
  CancelMaintenanceWindowExecutionCommandInput,
  CancelMaintenanceWindowExecutionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelMaintenanceWindowExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelMaintenanceWindowExecutionCommandInput, CancelMaintenanceWindowExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CancelMaintenanceWindowExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelMaintenanceWindowExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelMaintenanceWindowExecutionResult.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelMaintenanceWindowExecutionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelMaintenanceWindowExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelMaintenanceWindowExecutionCommandOutput> {
    return deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
